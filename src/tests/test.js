describe("homework-4-js", function() {	

	describe("largest", function() {

		it("return the largest number passed like a argument", function() {
			assert.equal(largest(2, 0.1, -5, 100, 3), 100);
		});

	});

	describe("smallest", function() {

		it("return the smallest number passed like a argument", function() {
			assert.equal(smallest(2, 0.1, -5, 100, 3), -5);
		});

	});

	describe("transform", function() {
		
		const baseArray = [10, 20, 30, 40, 50];

		function makeTest(x) {
			const newArray = transform(baseArray);
		
			it(`transform array of numbers to array of functions.
				function at index x = ${x} should return ${baseArray[x]} from base array`, function() {
				assert.equal(newArray[x](), [10, 20, 30, 40, 50][x]);
			});
		}
		
		for(let key in baseArray) {
			makeTest(key);
		};
	});

	describe("sum", function() {

		it("return compound value of arbitrary number of digit arguments", function() {
			assert.equal(sum(1,3,5,7), 16);
		});
	});

	describe('countDown', () => {

		countDown(3);

		it("there should be some kind of magic", function() {
			expect(!!'EXPECTO PATRONUM').to.be.true;
		});
	});

	
	describe("myBind", function() {

		function addPropToNumber(number) {
			return this.prop + number;
		}

		const expected = addPropToNumber.myBind({ prop: 9 });
		
		it('take object { prop: 9 } as a context and pass an array [3,2,1] to call', function() {
			assert.equal(expected(...[3,2,1]), 12);
		});

		it('take object { prop: 9 } as a context and pass 5 to call', function() {
			assert.equal(expected(5), 14);
		});

		const expected2 = addPropToNumber.myBind({ prop: 9 }, 10);

		it('take object { prop: 9 } as a context and bind 10 as argument', function() {
			assert.equal(expected2(), 19);
		});		

	});
});
