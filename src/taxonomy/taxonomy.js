export const Taxonomy = ({post, taxonomies, selectedTax}) => {
	if (!post.data) {
		return <div>No Data</div>
	}
	taxonomies = taxonomies.data;
	const terms = post.data['_embedded']['wp:term']
	console.log(terms, taxonomies)
	const onChangeProp = (prop) => (e) => console.log('change')
	return <div>
		<select onChange={onChangeProp('taxonomy')}>
			{Object.keys(taxonomies).map((e, i) => <option value={i} key={i}>{taxonomies[e].name}</option>)}
		</select>
		<Terms terms={terms[0]} />
	</div>
}

const Terms = ({terms}) =>
	<ul>
		{terms.map((e, i) => <li key={i}>{e.name}</li>)}
	</ul>

