
const BooksTable = ()=>{
    return (
        <div class="overflow-x-auto rounded-lg shadow-md">
            <table class="min-w-full bg-white text-sm text-left text-gray-800">
                <thead class="bg-gray-200 uppercase text-xs text-gray-600">
                <tr>
                    <th class="px-6 py-3">Name</th>
                    <th class="px-6 py-3">Author</th>
                    <th class="px-6 py-3">Publisher</th>
                    <th class="px-6 py-3">ISBN</th>
                    <th class="px-6 py-3">Category</th>
                    <th class="px-6 py-3">Status</th>
                    <th class="px-6 py-3 text-center">Actions</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4">The Great Book</td>
                    <td class="px-6 py-4">John Doe</td>
                    <td class="px-6 py-4">Penguin</td>
                    <td class="px-6 py-4">978-3-16-148410-0</td>
                    <td class="px-6 py-4">Fiction</td>
                    <td class="px-6 py-4">Available</td>
                    <td class="px-6 py-4 text-center space-x-2">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Edit</button>
                    <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>

            {/* Pagination */}
            <div class="flex justify-between items-center p-4 text-sm text-gray-600">
                <div>Showing 1 to 10 of 50 results</div>
                <div class="flex space-x-2">
                <button class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">Previous</button>
                <button class="px-3 py-1 rounded border border-gray-300 bg-gray-200">1</button>
                <button class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">2</button>
                <button class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">3</button>
                <button class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">Next</button>
                </div>
            </div>
        </div>

    )
}

export default BooksTable;