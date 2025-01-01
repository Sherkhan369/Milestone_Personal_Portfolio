

function Result() {
    return (
        <div className="result-page">
          <div className="result-page-siz">
            <h1 className="result-h1">
              Grand Entrance Exam Result
            </h1>
            
            <div className="form-div1">
              <div className="form-div2">
                <form>
                  <div className="mb-6">
                    <label  htmlFor="name">
                      Registration Number*
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      placeholder=" Registration Number"
                      required
                    />
                  </div>
    
                  <div className="mb-6">
                    <label htmlFor="email">
                      CNIC or B-Form Number*
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                     
                      placeholder=" CNIC or B-Form Number"
                      required
                    />
                  </div>
    
                 
    
                  <button
                    type="submit"
                    className="get-btn"
                  >
                    GET RESULT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } 


export default Result