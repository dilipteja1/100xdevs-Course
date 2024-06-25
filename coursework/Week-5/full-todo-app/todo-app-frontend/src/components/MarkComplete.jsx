

export function MarkComplete({status}) {
	return <div>
		{status == true? "Done!" : "Mark as Complete"}
	</div>
}