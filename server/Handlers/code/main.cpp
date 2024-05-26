#include <iostream>
#include <vector>

using namespace std;

vector<int> mergeSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    int n = nums1.size();
    int m = nums2.size();
    vector<int> mergedArray(n + m);

    int i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (nums1[i] <= nums2[j]) {
            mergedArray[k++] = nums1[i++];
        } else {
            mergedArray[k++] = nums2[j++];
        }
    }

    while (i < n) {
        mergedArray[k++] = nums1[i++];
    }

    while (j < m) {
        mergedArray[k++] = nums2[j++];
    }

    return mergedArray;
}

int main() {
    int n, m;
    cin >> n;
    vector<int> nums1(n);
    for (int i = 0; i < n; ++i) {
        cin >> nums1[i];
    }
    cin >> m;
    vector<int> nums2(m);
    for (int i = 0; i < m; ++i) {
        cin >> nums2[i];
    }

    // Merge the two arrays
    vector<int> mergedArray = mergeSortedArrays(nums1, nums2);

    // Output the merged array
    for (int num : mergedArray) {
        cout << num <<" ";
    }
    return 0;
}
