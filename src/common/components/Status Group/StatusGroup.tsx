import Button from "../Button";


const StatusGroup = () => {
    const handleFilter = (id: string) => {
        console.log(id);
      };
    return (
        <div className="flex gap-2 flex-wrap">
        <Button status  onClick={() => handleFilter("/")}>All </Button>
        <Button status  onClick={() => handleFilter("/progress")}>Progress </Button>
        <Button status  onClick={() => handleFilter("/complete")}>Complete </Button>
        <Button status  onClick={() => handleFilter("/delivery")}>Delivery </Button>
        <Button status  onClick={() => handleFilter("/buffer")}>Buffer </Button>
        <Button status  onClick={() => handleFilter("/good-product")}>Good Products </Button>
      </div>
     
    );
};

export default StatusGroup;