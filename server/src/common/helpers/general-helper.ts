export class GeneralHelper {
  getPaginationData = (data: any, page: number, limit: number) => {
    const { count: total, rows: items } = data;
    const currentPage = page || 1;
    const totalPages = Math.ceil(total / limit);
    const perPage = limit;

    return { total, items, totalPages, perPage, currentPage };
  };

  getPagination = (page: number, size: number) => {
    const limit = size || 3;
    const offset = page ? (page - 1) * limit : 0;

    return { limit, offset };
  };
}
