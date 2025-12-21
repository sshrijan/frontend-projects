console.log("hello promises");
// const title = document.getElementById("title");
// let loading = false;

// const myPromise = () => {
//   loading = true;
//   if (loading) {
//     title.innerHTML = "loading";
//   }
//   return new Promise((resolve, reject) => {
//     let success = true;
//     setTimeout(() => {
//       if (success) {
//         resolve("promise resolved");
//       } else {
//         reject("promise rejected");
//       }
//     }, 1000);
//   });
// };

// const executePromise = async () => {
//   await myPromise()
//     .then((resolve) => {
//       console.log(resolve);
//     })
//     .catch((reject) => {
//       console.log(reject);
//     })
//     .finally(() => {
//       loading = false;
//       if (!loading) {
//         title.innerHTML = "JS Promises";
//       }
//     });
// };
// executePromise();

// const fetchApiWithPromiseChaining = async () => {
//   fetch("https://fakestoreapi.com/products")
//     .then(async (resolve) => {
//       const response = await resolve.json();
//       console.log(response);
//       const singleProduct = response[0];
//     })
//     .catch((reject) => {
//       console.log("Error occurred!");
//     });
// };

// fetchApiWithPromiseChaining();
const proudctsContainer = document.getElementById("products");
let products = [];

const htmlGenerator = (arr) => {
  return arr.map((item) => {
    const rating = Math.floor(item.rating.rate);
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(`<i class='bi bi-star-fill text-warning'></i>`);
    }

    const starGenerator = () => {
      return stars.join("");
    };

    console.log(stars);

    return `<div class="card col-6 col-md-3 p-0" style="width: 18rem">
          <img
          src=${item.image}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="text-success h5">Rs.${item.price}</p>
            <p class="text-primary h6">${item.category}</p>
            <div class="rating mb-2">
             ${starGenerator()}
            </div>
            <p class="h6">
              ${item.description}
            </p>
            <a href="#" class="btn btn-primary w-100 mt-3">View Product</a>
          </div>
        </div>`;
  });
};

const fetchApi = async () => {
  const productsData = await fetch("https://fakestoreapi.com/products");
  const response = await productsData.json();
  products = response;

  console.log(products);
  proudctsContainer.innerHTML = htmlGenerator(products).join("");
};
fetchApi();
