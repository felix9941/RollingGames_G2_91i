const addProdFav = (idproduct) => {
  const res = userslocalstorage.find((user) => user.login);

  if (res) {
    if (favsLocalStorage.length) {
      const prodExist = favsLocalStorage.find((fav) => fav.id === idproduct);

      if (prodExist) {
        alert("El producto está en favoritos.");
      } else {
        favsLocalStorage.push(product);
        localStorage.setItem("favs", JSON.stringify(favsLocalStorage));
      }
    } else {
      favsLocalStorage.push(product);
    }
    localStorage.setItem("favs", JSON.stringify(favsLocalStorage));
  } else {
    location.href = "../page/login.html";
  }
};
