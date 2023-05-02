const BasicForm = (props) => {
  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' />
      </div>
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
