import { useState } from "react";

const RepositoriesList: React.FC = () => {
    
    const [term, setTerm] = useState('');
    
    const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    
    return <div>
        <form onSubmit={onsubmit} action="">
            <input value={term} onChange={e => setTerm(e.target.value)}  type="text" />
            <button>Search</button>
        </form>
    </div>
}

export default RepositoriesList;