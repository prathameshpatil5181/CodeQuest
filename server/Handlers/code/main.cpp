#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        vector<int> nums;
        int num;
        for (int i = 0; i < n; i++)
        {
            cin >> num;
            nums.push_back(num);
        }
        int target;
        cin >> target;
        vector<int> ans; // Define ans vector here to store the result
        map<int, int> mp;
        for (int i = 0; i < nums.size(); i++)
        {
            if (mp.find(target - nums[i]) != mp.end())
            {
                ans.push_back(mp[target - nums[i]]);
                ans.push_back(i);
                cout << mp[target - nums[i]] << " " << i << endl; // Print the result
                break;
            }
            mp[nums[i]] = i; // Insert into map with value as index
        }
    }
    return 0;
}
