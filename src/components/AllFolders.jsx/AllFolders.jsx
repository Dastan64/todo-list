import Folder from '../Folder/Folder';

function AllFolders({ folders }) {
  const allFoldersList =
    folders.length > 0 &&
    folders.map((item) => <Folder folder={item} key={item.id} id={item.id} />);
  return <>{allFoldersList}</>;
}

export default AllFolders;
