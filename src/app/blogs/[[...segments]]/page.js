

const page = ({ params }) => {
    // console.log(params.segments);
    const [year, id] = params.segments || [];
    return (
        <div>
            single blog of year {year || new Date().getFullYear()} with id {id}
        </div>
    );
};

export default page;