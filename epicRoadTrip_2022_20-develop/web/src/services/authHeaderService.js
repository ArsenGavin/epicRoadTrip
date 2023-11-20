const authHeader = ()  => {
  const token  = localStorage.getItem("token");
  return { authorization: token };
};

export default authHeader;