import React from 'react'
import ReactPaginate from 'react-paginate'

export type PaginationProps = {
	onChange: (value: number) => void
	totalPages: number
}

import { Wrapper } from './styles'
export const Pagination = ({ onChange, totalPages }: PaginationProps) => {
	return (
		<Wrapper>
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={(e) => onChange(e.selected)}
				pageRangeDisplayed={4}
				pageCount={totalPages}
				previousLabel="<"
				marginPagesDisplayed={2}
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				activeClassName="active"
			/>
		</Wrapper>
	)
}
