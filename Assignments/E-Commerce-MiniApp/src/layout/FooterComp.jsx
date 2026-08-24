
function FooterComp() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <h5 className="fw-bold mb-1">The Paper Mart</h5>
            <p className="text-secondary mb-0">
              Your simple online stationery store.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <p className="mb-1">
              © {new Date().getFullYear()} The Paper Mart
            </p>
            <small className="text-secondary">
              All Rights Reserved
            </small>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterComp;