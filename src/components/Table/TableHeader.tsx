import { ReactElement } from "react";

const TableHeader = (): ReactElement => {
  return (
    <thead>
      <tr className="border-t border-gray-200">
        <th className="pr-6 py-3 max-w-1 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
        <th className="px-6 py-3 max-w-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <span className="lg:pl-2">Title</span>
        </th>
        <th className="px-6 py-3 max-w-5 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Category
        </th>
        <th className="hidden md:table-cell max-w-5 px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          Tags
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
