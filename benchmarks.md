# Array

    forEach without context
    ✓  native forEach x 820,352 ops/sec ±5.94% (79 runs sampled)
    ✓  new forEach x 7,321,284 ops/sec ±2.03% (97 runs sampled)
    ✓  fast.js forEach x 21,687,859 ops/sec ±1.69% (96 runs sampled)
    ✓  lodash forEach x 18,276,729 ops/sec ±1.72% (90 runs sampled)
    Fastest is fast.js forEach

    map without context
    ✓  native map x 729,719 ops/sec ±2.96% (83 runs sampled)
    ✓  new map x 4,582,656 ops/sec ±0.56% (99 runs sampled)
    ✓  fast.js map x 8,755,870 ops/sec ±9.32% (95 runs sampled)
    ✓  lodash map x 4,071,429 ops/sec ±0.39% (100 runs sampled)
    Fastest is fast.js map

    some without context
    ✓  native some x 1,143,553 ops/sec ±0.74% (99 runs sampled)
    ✓  new some x 19,071,075 ops/sec ±0.77% (95 runs sampled)
    ✓  fast.js some x 23,559,208 ops/sec ±0.46% (100 runs sampled)
    ✓  lodash some x 11,042,896 ops/sec ±0.60% (95 runs sampled)
    Fastest is fast.js some

    every without context
    ✓  native every x 2,119,392 ops/sec ±0.68% (99 runs sampled)
    ✓  new every x 5,771,586 ops/sec ±0.94% (94 runs sampled)
    ✗  fast.js every:
    ✓  lodash every x 5,694,992 ops/sec ±0.58% (100 runs sampled)
    Fastest is new every

    filter without context
    ✓  native filter x 745,724 ops/sec ±2.05% (86 runs sampled)
    ✓  new filter x 18,577,567 ops/sec ±0.59% (96 runs sampled)
    ✓  fast.js filter x 22,188,301 ops/sec ±0.47% (96 runs sampled)
    ✓  lodash filter x 10,779,748 ops/sec ±0.32% (101 runs sampled)
    Fastest is fast.js filter

    find without context
    ✗  native find:
    ✓  new find x 5,947,301 ops/sec ±0.70% (98 runs sampled)
    ✗  fast.js find:
    ✓  lodash find x 10,733,972 ops/sec ±0.79% (98 runs sampled)
    Fastest is lodash find

    findIndex without context
    ✗  native findIndex:
    ✓  new findIndex x 17,205,256 ops/sec ±2.78% (93 runs sampled)
    ✗  fast.js findIndex:
    ✓  lodash findIndex x 5,091,702 ops/sec ±2.01% (87 runs sampled)
    Fastest is new findIndex

    forEach with context
    ✓  native forEach x 1,065,889 ops/sec ±1.34% (90 runs sampled)
    ✓  new forEach x 3,612,560 ops/sec ±1.93% (92 runs sampled)
    ✓  fast.js forEach x 3,705,634 ops/sec ±1.24% (89 runs sampled)
    ✓  lodash forEach x 2,064,498 ops/sec ±1.40% (95 runs sampled)
    Fastest is fast.js forEach,new forEach

    map with context
    ✓  native map x 717,211 ops/sec ±2.68% (84 runs sampled)
    ✓  new map x 3,152,863 ops/sec ±0.66% (100 runs sampled)
    ✓  fast.js map x 2,510,695 ops/sec ±0.63% (100 runs sampled)
    ✓  lodash map x 1,314,940 ops/sec ±1.11% (94 runs sampled)
    Fastest is new map

    some with context
    ✓  native some x 1,122,764 ops/sec ±0.63% (99 runs sampled)
    ✓  new some x 2,936,578 ops/sec ±3.41% (95 runs sampled)
    ✓  fast.js some x 3,873,086 ops/sec ±0.68% (97 runs sampled)
    ✓  lodash some x 1,332,627 ops/sec ±0.42% (98 runs sampled)
    Fastest is fast.js some

    every with context
    ✓  native every x 1,856,611 ops/sec ±0.78% (101 runs sampled)
    ✓  new every x 2,652,633 ops/sec ±0.74% (101 runs sampled)
    ✗  fast.js every:
    ✓  lodash every x 3,146,972 ops/sec ±0.65% (98 runs sampled)
    Fastest is lodash every

    filter with context
    ✓  native filter x 726,630 ops/sec ±2.29% (85 runs sampled)
    ✓  new filter x 3,808,847 ops/sec ±0.53% (99 runs sampled)
    ✓  fast.js filter x 3,619,419 ops/sec ±2.72% (96 runs sampled)
    ✓  lodash filter x 1,501,288 ops/sec ±0.49% (97 runs sampled)
    Fastest is new filter

    find with context
    ✗  native find:
    ✓  new find x 2,654,612 ops/sec ±0.60% (93 runs sampled)
    ✗  fast.js find:
    ✓  lodash find x 1,670,609 ops/sec ±2.30% (94 runs sampled)
    Fastest is new find

    findIndex with context
    ✗  native findIndex:
    ✓  new findIndex x 3,895,427 ops/sec ±0.71% (97 runs sampled)
    ✗  fast.js findIndex:
    ✓  lodash findIndex x 1,592,103 ops/sec ±1.88% (90 runs sampled)
    Fastest is new findIndex

    indexOf without context
    ✓  native indexOf x 3,411,887 ops/sec ±0.91% (96 runs sampled)
    ✓  new indexOf x 23,050,698 ops/sec ±0.80% (96 runs sampled)
    ✓  fast.js indexOf x 25,195,685 ops/sec ±0.49% (98 runs sampled)
    ✓  lodash indexOf x 21,714,016 ops/sec ±0.83% (96 runs sampled)
    Fastest is fast.js indexOf

    lastIndexOf without context
    ✓  native lastIndexOf x 3,319,617 ops/sec ±0.73% (98 runs sampled)
    ✓  new lastIndexOf x 10,265,227 ops/sec ±12.72% (93 runs sampled)
    ✓  fast.js lastIndexOf x 7,399,223 ops/sec ±0.81% (95 runs sampled)
    ✓  lodash lastIndexOf x 13,526,185 ops/sec ±13.94% (93 runs sampled)
    Fastest is lodash lastIndexOf

    indexOf with context
    ✓  native indexOf x 3,628,702 ops/sec ±0.44% (99 runs sampled)
    ✓  new indexOf x 31,777,225 ops/sec ±0.49% (101 runs sampled)
    ✓  fast.js indexOf x 33,943,250 ops/sec ±0.64% (101 runs sampled)
    ✓  lodash indexOf x 26,726,751 ops/sec ±0.81% (97 runs sampled)
    Fastest is fast.js indexOf

    lastIndexOf with context
    ✓  native lastIndexOf x 3,375,364 ops/sec ±0.36% (102 runs sampled)
    ✓  new lastIndexOf x 5,902,313 ops/sec ±1.34% (98 runs sampled)
    ✓  fast.js lastIndexOf x 7,640,022 ops/sec ±1.26% (101 runs sampled)
    ✓  lodash lastIndexOf x 18,389,295 ops/sec ±4.56% (99 runs sampled)
    Fastest is lodash lastIndexOf

    reduce without context
    ✓  native reduce x 1,193,999 ops/sec ±0.37% (99 runs sampled)
    ✓  new reduce x 18,461,330 ops/sec ±0.64% (97 runs sampled)
    ✓  fast.js reduce x 21,822,749 ops/sec ±0.32% (100 runs sampled)
    ✓  lodash reduce x 3,814,542 ops/sec ±0.82% (94 runs sampled)
    Fastest is fast.js reduce

    reduceRight without context
    ✓  native reduceRight x 1,163,086 ops/sec ±0.41% (99 runs sampled)
    ✓  new reduceRight x 3,995,137 ops/sec ±0.49% (100 runs sampled)
    ✓  fast.js reduceRight x 10,769,959 ops/sec ±10.68% (98 runs sampled)
    ✓  lodash reduceRight x 3,676,238 ops/sec ±0.45% (99 runs sampled)
    Fastest is fast.js reduceRight

    reduce with context
    ✓  native reduce x 1,048,124 ops/sec ±0.50% (100 runs sampled)
    ✓  new reduce x 19,023,919 ops/sec ±0.68% (97 runs sampled)
    ✓  fast.js reduce x 21,043,366 ops/sec ±0.44% (96 runs sampled)
    ✓  lodash reduce x 3,764,685 ops/sec ±0.47% (98 runs sampled)
    Fastest is fast.js reduce

    reduceRight with context
    ✓  native reduceRight x 1,089,948 ops/sec ±0.55% (99 runs sampled)
    ✓  new reduceRight x 5,375,989 ops/sec ±1.75% (96 runs sampled)
    ✓  fast.js reduceRight x 6,640,395 ops/sec ±9.14% (82 runs sampled)
    ✓  lodash reduceRight x 1,929,116 ops/sec ±3.37% (78 runs sampled)
    Fastest is fast.js reduceRight
