```
Using node 2.3.3
Using node-extensions 1.4.3, fast.js ^0.1.1, lodash ^3.8.0

Running Array benchmarks...

forEach without context
✓  native          x 2,204,479 ops/sec ±1.51% (89 runs sampled)
✓  node-extensions x 7,692,044 ops/sec ±1.58% (91 runs sampled)
✓  fast.js         x 23,738,803 ops/sec ±1.44% (91 runs sampled)
✓  lodash          x 7,444,892 ops/sec ±1.30% (91 runs sampled)
Fastest is fast.js

map without context
✓  native          x 1,730,769 ops/sec ±1.32% (87 runs sampled)
✓  node-extensions x 12,999,186 ops/sec ±1.27% (91 runs sampled)
✓  fast.js         x 18,211,059 ops/sec ±1.15% (96 runs sampled)
✓  lodash          x 11,947,660 ops/sec ±1.48% (89 runs sampled)
Fastest is fast.js

some without context
✓  native          x 2,320,550 ops/sec ±1.48% (91 runs sampled)
✓  node-extensions x 20,390,124 ops/sec ±1.80% (90 runs sampled)
✓  fast.js         x 24,460,515 ops/sec ±1.24% (92 runs sampled)
✓  lodash          x 16,268,411 ops/sec ±1.55% (92 runs sampled)
Fastest is fast.js

every without context
✓  native          x 3,493,382 ops/sec ±1.33% (94 runs sampled)
✓  node-extensions x 20,033,845 ops/sec ±1.77% (88 runs sampled)
✓  fast.js         x 30,689,113 ops/sec ±2.22% (88 runs sampled)
✓  lodash          x 24,027,223 ops/sec ±2.03% (87 runs sampled)
Fastest is fast.js

filter without context
✓  native          x 1,752,953 ops/sec ±1.61% (90 runs sampled)
✓  node-extensions x 20,328,467 ops/sec ±1.42% (93 runs sampled)
✓  fast.js         x 22,629,042 ops/sec ±1.27% (94 runs sampled)
✓  lodash          x 15,337,938 ops/sec ±1.86% (91 runs sampled)
Fastest is fast.js

find without context
✗  native         :
✓  node-extensions x 19,798,580 ops/sec ±1.66% (92 runs sampled)
✗  fast.js        :
✓  lodash          x 15,099,790 ops/sec ±1.47% (91 runs sampled)
Fastest is node-extensions

findIndex without context
✗  native         :
✓  node-extensions x 20,749,960 ops/sec ±1.33% (92 runs sampled)
✗  fast.js        :
✓  lodash          x 15,995,008 ops/sec ±1.48% (90 runs sampled)
Fastest is node-extensions

forEach with context
✓  native          x 2,255,873 ops/sec ±1.37% (87 runs sampled)
✓  node-extensions x 4,204,584 ops/sec ±1.47% (88 runs sampled)
✓  fast.js         x 4,312,832 ops/sec ±1.51% (91 runs sampled)
✓  lodash          x 3,514,622 ops/sec ±1.21% (91 runs sampled)
Fastest is fast.js

map with context
✓  native          x 1,750,918 ops/sec ±1.87% (89 runs sampled)
✓  node-extensions x 3,532,761 ops/sec ±2.10% (88 runs sampled)
✓  fast.js         x 3,506,348 ops/sec ±1.57% (88 runs sampled)
✓  lodash          x 2,854,655 ops/sec ±1.96% (87 runs sampled)
Fastest is node-extensions

some with context
✓  native          x 2,361,422 ops/sec ±1.66% (92 runs sampled)
✓  node-extensions x 4,236,496 ops/sec ±1.16% (88 runs sampled)
✓  fast.js         x 3,874,567 ops/sec ±1.70% (87 runs sampled)
✓  lodash          x 3,084,985 ops/sec ±1.75% (89 runs sampled)
Fastest is node-extensions

every with context
✓  native          x 3,813,985 ops/sec ±1.36% (91 runs sampled)
✓  node-extensions x 4,337,086 ops/sec ±1.01% (91 runs sampled)
✓  fast.js         x 12,649,300 ops/sec ±1.58% (86 runs sampled)
✓  lodash          x 7,413,172 ops/sec ±2.61% (87 runs sampled)
Fastest is fast.js

filter with context
✓  native          x 1,908,103 ops/sec ±2.84% (91 runs sampled)
✓  node-extensions x 3,935,310 ops/sec ±1.15% (90 runs sampled)
✓  fast.js         x 4,128,945 ops/sec ±1.28% (93 runs sampled)
✓  lodash          x 3,612,768 ops/sec ±1.66% (88 runs sampled)
Fastest is fast.js

find with context
✗  native         :
✓  node-extensions x 4,069,716 ops/sec ±2.29% (89 runs sampled)
✗  fast.js        :
✓  lodash          x 3,684,859 ops/sec ±2.95% (89 runs sampled)
Fastest is node-extensions

findIndex with context
✗  native         :
✓  node-extensions x 4,489,737 ops/sec ±1.17% (93 runs sampled)
✗  fast.js        :
✓  lodash          x 2,586,314 ops/sec ±1.68% (91 runs sampled)
Fastest is node-extensions

indexOf without context
✓  native          x 3,651,014 ops/sec ±1.43% (89 runs sampled)
✓  node-extensions x 27,520,774 ops/sec ±1.69% (93 runs sampled)
✓  fast.js         x 30,086,887 ops/sec ±0.85% (94 runs sampled)
✓  lodash          x 23,638,545 ops/sec ±1.32% (91 runs sampled)
Fastest is fast.js

lastIndexOf without context
✓  native          x 3,607,168 ops/sec ±2.35% (88 runs sampled)
✓  node-extensions x 19,649,164 ops/sec ±1.31% (91 runs sampled)
✓  fast.js         x 25,206,931 ops/sec ±1.57% (93 runs sampled)
✓  lodash          x 24,070,826 ops/sec ±1.26% (90 runs sampled)
Fastest is fast.js

indexOf with context
✓  native          x 3,705,155 ops/sec ±1.74% (88 runs sampled)
✓  node-extensions x 34,170,027 ops/sec ±1.99% (91 runs sampled)
✓  fast.js         x 38,446,268 ops/sec ±1.39% (89 runs sampled)
✓  lodash          x 30,371,608 ops/sec ±1.94% (86 runs sampled)
Fastest is fast.js

lastIndexOf with context
✓  native          x 3,564,809 ops/sec ±1.61% (89 runs sampled)
✓  node-extensions x 25,378,992 ops/sec ±1.89% (91 runs sampled)
✓  fast.js         x 34,920,031 ops/sec ±1.92% (90 runs sampled)
✓  lodash          x 19,761,215 ops/sec ±2.22% (87 runs sampled)
Fastest is fast.js

reduce without context
✓  native          x 2,560,288 ops/sec ±1.59% (91 runs sampled)
✓  node-extensions x 22,555,475 ops/sec ±1.46% (92 runs sampled)
✓  fast.js         x 25,568,243 ops/sec ±1.05% (94 runs sampled)
✓  lodash          x 17,802,158 ops/sec ±1.17% (94 runs sampled)
Fastest is fast.js

reduceRight without context
✓  native          x 2,686,945 ops/sec ±1.10% (93 runs sampled)
✓  node-extensions x 20,432,648 ops/sec ±1.48% (91 runs sampled)
✓  fast.js         x 22,652,428 ops/sec ±1.08% (92 runs sampled)
✓  lodash          x 14,909,354 ops/sec ±1.90% (90 runs sampled)
Fastest is fast.js

reduce with context
✓  native          x 2,621,159 ops/sec ±1.45% (91 runs sampled)
✓  node-extensions x 24,948,050 ops/sec ±1.37% (92 runs sampled)
✓  fast.js         x 24,827,371 ops/sec ±1.45% (94 runs sampled)
✓  lodash          x 17,074,705 ops/sec ±1.37% (92 runs sampled)
Fastest is node-extensions,fast.js

reduceRight with context
✓  native          x 2,565,621 ops/sec ±1.14% (93 runs sampled)
✓  node-extensions x 21,381,358 ops/sec ±1.00% (95 runs sampled)
✓  fast.js         x 22,107,734 ops/sec ±1.25% (91 runs sampled)
✓  lodash          x 14,740,746 ops/sec ±1.20% (90 runs sampled)
Fastest is fast.js
```
