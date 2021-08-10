import Layout from "../lib/Layout";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  zoom: {
    position: "relative",
    transition: "all .3s ease",
    "&:hover": {
      transform: "scale(1.2)"
    },
    cursor: "pointer",
    borderRadius: "inherit"
  }
});

export default function Blog() {
  const classes = useStyles();

  return (
    <Layout title="Blog">
      <header className="flex justify-center py-20">
        <h1 className="text-white text-center text-6xl uppercase font-extrabold">
          My 
          <span className="text-yellow-500"> Blog</span>
        </h1>
      </header>

      <div className="container mx-auto mb-10 px-20">
        <div className="grid grid-cols-3 gap-8">
          <div className="card overflow-hidden">
            <div className="overflow-hidden rounded">
              <img src="/img/blog-post-1.jpg" className={classes.zoom + " rounded-t-lg w-full"} alt="" />
            </div>
            <div className="text-white bg-icons p-7 rounded-b-lg border-t-8 border-yellow-400">
              <h2 className="font-bold text-xl mb-4">How to Own Your Audience by Creating an Email List</h2>
              <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="overflow-hidden rounded">
              <img src="/img/blog-post-2.jpg" className={classes.zoom + " rounded-t-lg w-full"} alt="" />
            </div>
            <div className="text-white bg-icons p-7 rounded-b-lg border-t-8 border-yellow-400">
              <h2 className="font-bold text-xl mb-4">How to Own Your Audience by Creating an Email List</h2>
              <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="overflow-hidden rounded">
              <img src="/img/blog-post-3.jpg" className={classes.zoom + " rounded-t-lg w-full"} alt="" />
            </div>
            <div className="text-white bg-icons p-7 rounded-b-lg border-t-8 border-yellow-400">
              <h2 className="font-bold text-xl mb-4">How to Own Your Audience by Creating an Email List</h2>
              <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="overflow-hidden rounded">
              <img src="/img/blog-post-4.jpg" className={classes.zoom + " rounded-t-lg w-full"} alt="" />
            </div>
            <div className="text-white bg-icons p-7 rounded-b-lg border-t-8 border-yellow-400">
              <h2 className="font-bold text-xl mb-4">How to Own Your Audience by Creating an Email List</h2>
              <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="overflow-hidden rounded">
              <img src="/img/blog-post-5.jpg" className={classes.zoom + " rounded-t-lg w-full"} alt="" />
            </div>
            <div className="text-white bg-icons p-7 rounded-b-lg border-t-8 border-yellow-400">
              <h2 className="font-bold text-xl mb-4">How to Own Your Audience by Creating an Email List</h2>
              <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="overflow-hidden rounded">
              <img src="/img/blog-post-6.jpg" className={classes.zoom + " rounded-t-lg w-full"} alt="" />
            </div>
            <div className="text-white bg-icons p-7 rounded-b-lg border-t-8 border-yellow-400">
              <h2 className="font-bold text-xl mb-4">How to Own Your Audience by Creating an Email List</h2>
              <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}