interface Link {
  description?: string;
  id?: number;
  url: string;
}

function filterByTerm(input: Array<Link>, searchTerm: string) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  
  filterByTerm([{url: "string 1"}, {url: "string 2", id: 2, description: "descr-2"}], "java");