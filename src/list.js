
const List = ({lists}) => {
    return (
        <ul>
            {lists.map((item)=>{
                return(
                    <Item key={item.objectID} {...item} />
                );
            })}
        </ul>
    );
  }


const Item = ({title, url, author, num_comments, points}) => {
return (
    <li>
        <span>{title}</span>
        <br/>
        <span>{url}</span>
        <br/>
        <span>{author}</span>
        <br/>
        <span>{num_comments}</span>
        <br/>
        <span>{points}</span>
    </li>
    );
};


export default List;