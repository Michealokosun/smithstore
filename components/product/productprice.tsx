const Productprice = ({ price }: { price: string }) => {
  const [int, dec] = Number(price).toFixed(2).split(".");

  return (
    <div>
      <span className="align-super text-sm">$</span>
      <span className="text-xl h3-bold">{int}</span>
      <span className="align-super text-sm">.{dec}</span>
    </div>
  );
};

export default Productprice;
