import React, { FormEvent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import logoGithub from '../../assets/logo-github.svg';
import { FiChevronRight } from 'react-icons/fi';
import {Form, Repositories, Title, Error} from './styles'
import api from '../../service/api';
import { executionAsyncResource } from 'async_hooks';

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
    const [ repositories, setRepositories ] = useState<Repositories[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if(storagedRepositories){
            return JSON.parse(storagedRepositories);
        }
        return [];
        
    });

    // useEffect: sempre q a variavel do Array for inserida, ele vai executar a função
    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
    }, [repositories])

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
            setInputError('')

        } catch (error) {
            setInputError('Não existe este repositório')
        }

    }

    return(
    <>
        <img src={logoGithub} alt="Github Explore" />
        <Title>Explore repositórios no Github</Title>

        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
            <input 
                value={newRepo}
                placeholder="Digite o nome do repositório"
                onChange={e => setNewRepo(e.target.value)}
            />
            <button 
                type="submit">Pesquisar
            </button>
        </Form>
        {/* diretiva */}
        {/* se o inputError for true, tem erro entao faça */}
        { inputError && <Error>{inputError}</Error>}

        <Repositories>
            {repositories.map(repository => (
                <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
 
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
 
                    <FiChevronRight size={20}/>
                </Link>
            ))}
        </Repositories>
    </>
    );
};



export default Dashboard;