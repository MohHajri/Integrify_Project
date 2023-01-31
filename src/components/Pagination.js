import React from 'react'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

function Pagination( props) {
    const { data } = props;
    const [currentPosts, setCurrentPosts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
     const postsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + postsPerPage;
        setCurrentPosts(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / postsPerPage));
    }, [data, itemOffset, postsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * postsPerPage) % data.length;
        setItemOffset(newOffset);
    }
  return (
      <>
           <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map(country => (
              <tr key={country.name}>
                <td>
                  <img src={country.flag} alt={country.name} />
                </td>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
          <ReactPaginate
              breakLabel='...'
              nextLabel="next >"
              previousLabel="< previous"
              pageCount={pageCount}
              PageRangeDisplayed={3}
              onPageChange={handlePageClick}
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName='page-num'
              previousLinkClassName='page-num'
              nextLinkClassName='page-num'
              activeLinkClassName='active' 
          /> 
      </>
  )
}

export default Pagination