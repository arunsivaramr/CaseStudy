import static org.junit.Assert.*;

import org.junit.Test;

public class calculator {

	calculat c=new calculat();
	@Test
	public void test() {
		//fail("Not yet implemented");
		assertEquals(5, c.add(2,3));
		assertEquals(6, c.sub(12,6));
		assertEquals(24, c.mul(12, 2));
		assertEquals(2, c.div(12,6));
	}

}
