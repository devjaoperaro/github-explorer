import React, { FormEvent, useState } from 'react'

import logoGithub from '../../assets/logo-github.svg';
import { FiChevronRight } from 'react-icons/fi';
import {Form, Repositories, Title, Error} from './styles'
import api from '../../service/api';

interface Repositories {
    full_name: string;
    owner: {
        avatar_url: string;
        login: string;
    }
    description: string;
}

const Dashboard: React.FC = () => { 

    
    const [ newRepo, setNewRepo ] = useState('');
    const [ inputError, setInputError ] = useState('');
    const [ repositories, setRepositories ] = useState<Repositories[]>([]);

    //para retirar o autoReload do submit utilizamos o FormEvent com a função preventDefault
    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();
        
        if(!newRepo){
            setInputError('Digite o autor/repositorio');
            return;
        }

        try {
            const response = await api.get(`repos/${newRepo}`);
    
            const repository = response.data;
    
            setRepositories([...repositories, repository]);

            setNewRepo('')

        } catch (error) {
            setInputError('Não existe este repositório')
        }

    }

    return(
    <>
        <img src={logoGithub} alt="Github Explore" />
        <Title>Explore repositórios no Github</Title>

        <Form className="has-error" onSubmit={handleAddRepository}>
            <input 
                value={newRepo}
                placeholder="Digite o nome do repositório"
                onChange={e => setNewRepo(e.target.value)}
            />
            <button 
                type="submit">Pesquisar
            </button>
        </Form>
        { inputError && <Error>{inputError}</Error>}

        <Repositories>
            {repositories.map(repository => (
                 <a key={repository.full_name} href="teste">
                 <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
 
                 <div>
                     <strong>{repository.full_name}</strong>
                     <p>{repository.description}</p>
                 </div>
 
                 <FiChevronRight size={20}/>
             </a>
            ))}
        </Repositories>
    </>
    );
};



export default Dashboard;