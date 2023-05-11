/**
 * Deletes elements from array by comparator.
 * Function mutate array.
 */
export function deleteElementsFromArray<T>(comparator: (v: T) => boolean, arr: Array<T>) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (comparator(arr[i])) {
            arr.splice(i, 1);
        }
    }
}