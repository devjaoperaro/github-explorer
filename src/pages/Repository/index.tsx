import React, {useEffect, useState} from "react";

import {Header, RepositoryInfo, Issues} from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logGithub from '../../assets/logo-github.svg';
import { useRouteMatch, Link } from "react-router-dom";
import api from "../../service/api";

import Lottie from 'react-lottie';
import loadAnimation from '../../assets/16421-github-icon-black.json';  

interface RepositoryParams {
    repo: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues: number;
    owner: {
        avatar_url: string;
        login: string;
    }
}

interface IssuesParams{
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string
    } 
}

const Repository: React.FC = () => {

    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<IssuesParams[]>([])

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repo}`).then((response) => {
            setRepository(response.data);
        }); 

        api.get(`repos/${params.repo}/issues`).then((response) => {
            setIssues(response.data)
        });
    
    }, [params.repo]);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <Header>
                <img src={logGithub} alt="logo" />
                <Link to='/'>
                    <FiChevronLeft size={20}/>
                    <span>Voltar</span>
                </Link>
            </Header>
            
            {!!repository ? (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository?.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues}</strong>
                            <span>Issues Abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>   
            ) : (
                <div>
                    <Lottie 
	                    options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>
            )}
            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Issues>
        </>
    )
};

export default Repository;