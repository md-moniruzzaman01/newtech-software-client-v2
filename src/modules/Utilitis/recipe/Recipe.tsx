import React, { useRef, useState } from "react";

const Recipe = () => {
  const double_page = useRef(null);
  const [container, setContainer] = useState<number>(1);

  function showContainer(containerNumber: number) {
    switch (containerNumber) {
      case 1:
        return (
          <div className="max-w-4xl px-11 mx-auto" ref={double_page}>
            <div>
              <div className={styles.recipe}>
                <RecipeComponents copy="Receive copy" product={} orderInfo={} />
              </div>

              <div className={styles.recipe}>
                <RecipeComponents copy="Office copy" product={} orderInfo={} />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="max-w-4xl px-11 mt-2 mx-auto" ref={full_page}>
            <div key={product._id}>
              <div>
                <RecipeComponents
                  copy="Receive copy"
                  product={product.product}
                  orderInfo={order}
                />
              </div>
              <div className="divider"></div>
              <div>
                <RecipeComponents
                  copy="Office copy"
                  product={product.product}
                  orderInfo={order}
                />
              </div>
            </div>
            );
          </div>
        );
      case 3:
        return (
          <div className="max-w-4xl px-11 mx-auto" ref={half_page}>
            return (
            <div key={product._id}>
              {/* <div className={styles.recipe}>
                      <RecipeComponents
                        copy="Receive copy"
                        product={product.product}
                        orderInfo={order}
                      />
                    </div> */}

              <div>
                <RecipeComponents
                  copy="Office copy"
                  product={product.product}
                  orderInfo={order}
                />
              </div>
            </div>
            );
          </div>
        );
    }
  }

  return (
    <div>
      <div className="relative">
        {showContainer(container)}

        <div className="flex justify-end gap-5 custom_sticky">
          <ReactToPrint
            content={() => double_page.current}
            trigger={() => (
              <div>
                <Button onClick={() => setContainer(1)}>
                  <AiFillPrinter />
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
                  <AiFillPrinter />
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
                  <AiFillPrinter />
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
    </div>
  );
};

export default Recipe;
