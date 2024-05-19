// Sử dụng function để đóng gói logic và giảm lặp code


function environmentLogic(env, message, action) {
  if (process.env.NODE_ENV === env) {
    console.log(message);
    action();
  }
}

environmentLogic('development', message, () => {
  // logic of the environment here
});

environmentLogic('production', message, () => {
  // logic of the environment here
});
