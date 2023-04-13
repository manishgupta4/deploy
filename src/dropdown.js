import "./drop.css";
const Dropdown = () => {
    return ( 
        <div class="dropdown col-sm-1">
        <button class="dropbtn">Nodes</button>
        <div class="dropdown-content">
            <a href="#">Node 1</a>
            <a href="#">Node 2</a>
            <a href="#">Node 3</a>
            <a href="#">Node 4</a>
        </div>
        </div>
     );
}
 
export default Dropdown;