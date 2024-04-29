import { useSearchParams } from "react-router-dom";
import Button from "../../../../../../common/components/Button";

const ConditionalBtnInSearch = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("status");
  return (
    <div>
      {searchValue === "pending" ? (
        <div className="space-x-2">
          <Button primary mini>
            Completed & waiting for bill
          </Button>
          <Button primary mini>
            Completed
          </Button>
          <Button danger mini>
            Cancel
          </Button>
        </div>
      ) : (
        searchValue === "completed & waiting for bill" && (
          <div className="space-x-2">
            <Button primary mini>
              Completed
            </Button>
            <Button danger mini>
              Cancel
            </Button>
          </div>
        )
      )}
    </div>
  );
};

export default ConditionalBtnInSearch;
