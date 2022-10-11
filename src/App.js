import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Stats from "./Components/Stats/Stats";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/stats",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Stats></Stats>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          path: "/quiz/:quizId",
          element: <Quiz></Quiz>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="flex justify-center items-center my-8">
          <h3 className="text-3xl text-slate-600 font-serif font-bold">
            This route is not found! Error: 404!
          </h3>
        </div>
      ),
    },
  ]);
  return (
    <div className="bg-zinc-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
