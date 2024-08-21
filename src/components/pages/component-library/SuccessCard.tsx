const SuccessCard = () => {
  return (
    <div className="flex h-1/2 w-full flex-col items-center justify-center gap-8 rounded-md border p-24">
      <img src="/success.svg" alt="success-icon" className="h-32 w-32" />
      <h4>Successful operation!</h4>
      <p className="text-center text-neutral-60">
        Officia quis enim duis anim consectetur nisi nisi. In reprehenderit ea
        sint laborum.
      </p>
    </div>
  );
};

export default SuccessCard;
