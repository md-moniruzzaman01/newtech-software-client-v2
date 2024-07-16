import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import "./config/style.css";
import Button from "../../../common/components/Button";
import { useParams } from "react-router-dom";
import RecipeComplaints from "./partials/RecipeComplaints";
import { SERVER_URL } from "../../../shared/config/secret.ts";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";

const Recipe = () => {
  const double_page = useRef(null);
  const full_page = useRef(null);
  const half_page = useRef(null);
  const token = getFromLocalStorage(authKey);
  const [container, setContainer] = useState<number>(1);
  const [complaints, setComplaints] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const idArray = id.split(",");
      const tempComplaints = [];
      // Map through idArray and fetch data for each id
      Promise.all(
        idArray.map((singleId) =>
          fetch(SERVER_URL + "/complaints/" + singleId, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => tempComplaints.push(data.data))
            .catch((error) => console.error("Error fetching complaint:", error))
        )
      ).then(() => {
        // Update state with fetched data once all requests are complete
        setComplaints(tempComplaints);
      });
    }
  }, [id, token]);

  function showContainer(containerNumber: number) {
    switch (containerNumber) {
      case 1:
        return (
          <div className="max-w-4xl px-4 mx-auto" ref={double_page}>
            {complaints &&
              complaints?.map((complaint) => {
                const { products, ...info } = complaint;
                return (
                  <div key={complaint?.id}>
                    <div>
                      <div className="recipe">
                        <RecipeComplaints
                          copy="Receive copy"
                          products={products}
                          info={info}
                        />
                      </div>

                      <div className="recipe">
                        <RecipeComplaints
                          copy="Office copy"
                          products={products}
                          info={info}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      case 2:
        return (
          <div className="max-w-4xl px-11 mt-2 mx-auto" ref={full_page}>
            {complaints &&
              complaints.map((complaint) => {
                const { products, ...info } = complaint;
                return (
                  <div key={complaint?.id} className="max-w-4xl px-11 mx-auto">
                    <div>
                      <div className="recipe">
                        <RecipeComplaints
                          copy="Receive copy"
                          products={products}
                          info={info}
                        />
                      </div>

                      <div className="recipe">
                        <RecipeComplaints
                          copy="Office copy"
                          products={products}
                          info={info}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      case 3:
        return (
          <div className="max-w-4xl px-11 mx-auto" ref={half_page}>
            {complaints &&
              complaints.map((complaint) => {
                const { products, ...info } = complaint;
                return (
                  <div key={complaint?.id}>
                    <div>
                      {/* <div className="recipe">
                        <RecipeComplaints
                          copy="Receive copy"
                          products={products}
                          info={info}
                        />
                      </div> */}

                      <div className="recipe">
                        <RecipeComplaints
                          copy="Office copy"
                          products={products}
                          info={info}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        );
    }
  }

  return (
    <div className="relative">
      {showContainer(container)}

      <div className="flex justify-end gap-5 custom_sticky">
        <ReactToPrint
          content={() => double_page.current}
          trigger={() => (
            <div>
              <Button onClick={() => setContainer(1)}>
                {container === 1 ? (
                  <span>&nbsp; Print</span>
                ) : (
                  <span> Show Double Page</span>
                )}
              </Button>
            </div>
          )}
        />

        <ReactToPrint
          content={() => full_page.current}
          trigger={() => (
            <div>
              <Button onClick={() => setContainer(2)}>
                {container === 2 ? (
                  <span>&nbsp; Print</span>
                ) : (
                  <span> Show Full Page</span>
                )}
              </Button>
            </div>
          )}
        />
        <ReactToPrint
          content={() => half_page.current}
          trigger={() => (
            <div>
              <Button onClick={() => setContainer(3)}>
                {container === 3 ? (
                  <span>&nbsp; Print Half page</span>
                ) : (
                  <span> Show Half page</span>
                )}
              </Button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Recipe;
