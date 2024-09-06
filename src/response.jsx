function Response({ responseQuery }) {
    return (
      <>
        {responseQuery.map((individualResponse) => (
          <div key={individualResponse.id} className="response-container">
            {/* Query aligned to the right */}
            <div className="query right-align">
              {individualResponse.query}
            </div>
            {/* Response aligned to the left */}
            <div className="response left-align">
              {individualResponse.response}
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default Response;
  