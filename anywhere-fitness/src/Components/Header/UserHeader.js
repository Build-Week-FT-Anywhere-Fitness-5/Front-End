import LoggedInNav from './LoggedInNav';

const UserHeader = (props) => {
    
    const logout = (e, props) => {
        // e.preventDefault();
        // localStorage.removeItem("token");
        // props.history.push(`/`);
    }

    return (
        <div className='user-header'>
            <LoggedInNav />
            <button onClick={logout} className='lougout-btn'>            
                Logout
            </button>
        </div>        
    )
}

export default UserHeader;