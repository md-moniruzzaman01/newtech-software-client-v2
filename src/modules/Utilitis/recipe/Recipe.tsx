import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import "./config/style.css"
import Button from "../../../common/components/Button";
import { useSearchParams } from "react-router-dom";
import RecipeComplaints from "./partials/RecipeComplaints";

const Recipe = () => {
  const double_page = useRef(null);
  const [container, setContainer] = useState<number>(1);


  const [complaintsId] = useSearchParams()
  const id =  complaintsId.get("complaints")
  console.log(id)
  return (
    <div>
      <div className="relative">
        <div className="max-w-4xl px-11 mx-auto" ref={double_page}>
          <div>
            <div className="recipe">
              <RecipeComplaints copy="Receive copy" />
            </div>

            <div className="recipe">
              <RecipeComplaints copy="Office copy"  />
            </div>
          </div>
        </div>

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

        </div>
      </div>
    </div>
  );
};

export default Recipe;
