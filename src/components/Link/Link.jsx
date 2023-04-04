
const Link = ({route}) => {
    
    return (
        <div>
            <li className='md:mr-10 md:ps-0 md:my-0 my-3 text-white font-medium text-lg '>
            <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;