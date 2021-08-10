# 排序



## sort()

JavaScript数组的`sort()`方法默认**根据字符串Unicode码点**顺序排序。

如果想按数字大小升/降序排序，则传入一个比较函数，如下：

```javascript
arr.sort(function(a,b){
    return a-b //a-b为升序
    //return b-a  //b-a为降序
})
```





时间复杂度 O(n^2)



## 冒泡排序

每轮依次比较相邻两个数的大小，后面比前面小则交换

```javascript
function bubbleSort(arr){
	for(let i = 0; i < arr.length; i++){
		let stop = true; 
		for(let j = 0; j < arr.length - i; j++){ // 优化，每轮最后i个数已经被冒泡排好序
			if(arr[j] > arr[j+1]){
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				stop = false;
			}
		}
		if(stop) break; // 优化，当没有元素交换时，不再执行下一轮循环
		//console.log(arr);
	}
	return arr;
}
```



## 插入排序

每轮将第i个元素插入到前面合适的位置（依次和前面元素比较，直到无法交换）

```javascript
function insertionSort(arr){
	for(let i = 1; i < arr.length; i++){
		for(let j = i; j > 0 && (arr[j-1] > arr[j]); j--){
			let temp = arr[j-1];
			arr[j-1] = arr[j];
			arr[j] = temp;
		}
	}
	return arr;
}
```



## 选择排序

通过比较首先选出最小的数放在第一个位置上，然后在其余的数中选出次小数放在第二个位置上,依此类推,直到所有的数成为有序序列。

```javascript
function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
```





时间复杂度 O(nlogn)



## 快速排序

选择一个中间的数字为基准点，用两个数组分别去保存比基准数小的值，和比基准数大的值，最后递归左边的数组和右边的数组，用concat去做一个数组的合并.

```javascript
function quickSort(arr, i, j){
	if(arr.length <= 1){
		return arr;
	}
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr.splice(pivotIndex, 1)[0];
	let left = [];
	let right = [];

	for(let i = 0; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right));
}
```

