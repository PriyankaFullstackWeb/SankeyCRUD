const ValidationInfo = (values) => {
    let errors = {};
  
    const { name, username, email, password, cpassword } = values;
  
    if (!values.name.trim()) {
      errors.name = 'Name required !!!';
    } else if (name.length > 20 || name.length < 3) {
      errors.name = 'Name must between 3 to 20 characters !!!'
    } else if (!isNaN(name)) {
      errors.name = 'Name must between in characters not in numbers !!!'
    }
  
    if (!values.username.trim()) {
      errors.username = 'Username required !!!';
    } else if (username.length > 10 || username.length < 5) {
      errors.username = 'Username must between 5 to 15 characters !!!'
    }
  
    if (!values.email) {
      errors.email = 'Email required !!!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid !!!';
    }
  
    if (!values.password) {
      errors.password = 'Password is required !!!';
    } else if (password.length > 14 || password.length < 8) {
      errors.password = 'Password must between 8 to 14 characters !!!'
    }
  
    if (!values.cpassword) {
      errors.cpassword = 'Password Confirmation is required !!!';
    } else if (values.cpassword !== values.password) {
      errors.cpassword = 'Passwords do not match !!!';
    }
  
  
    return errors;
  }
  
  
  const TaskValidation = (task) => {
    let taskerror = {};
    const { tasktitle, taskdetails } = task;
  
  
    if (!task.taskdetails.trim()) {
      taskerror.taskdetails = 'Task details required in short !!!';
    } else if (taskdetails.length > 40 || taskdetails.length < 6) {
      taskerror.taskdetails = 'Task details must between 6 to 40 characters !!!'
    } else if (!isNaN(taskdetails)){
      taskerror.taskdetails = 'Task details must in characters !!!'
    }
  
    if (!task.tasktitle.trim()) {
      taskerror.tasktitle = 'Task Title is required !!!';
    } else if (tasktitle.length > 20 || tasktitle.length < 6) {
      taskerror.tasktitle = 'Task Title must between 6 to 20 characters !!!'
    } else if (!isNaN(tasktitle)){
      taskerror.tasktitle = 'Task title must in characters !!!'
    }
  
    return taskerror
  }
  
  export default ValidationInfo;
  export { TaskValidation };