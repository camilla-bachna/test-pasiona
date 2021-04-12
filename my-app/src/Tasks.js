function Tasks() {
  const handleClick = () => {
    /*    const counter = counter + 1; */
    let htmlCode = '';
    htmlCode += `<label htmlfor="task">`;
    /*  htmlCode += `Element ${counter}`; */
    htmlCode += `<input type="text" name="task" id="task" placeholder="name of task" />`;
    htmlCode += `</label>;`;
  };
  return (
    <>
      <form>
        <label htmlfor="task">
          Task example
          <input type="text" name="task" id="task" value="name of task" />
        </label>
      </form>
      <button onClick={handleClick}>Add task +</button>
    </>
  );
}
export default Tasks;
