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

  const obj1: Link = {url: "string 1"}
  const obj2: Link = {url: "string 2"}
  const obj3: Link = {url: "string 3"}

  const arrOfLinks: Array<Link> = [obj1, obj2, obj3]

  const term: string = "java"
  
  filterByTerm(arrOfLinks, term);