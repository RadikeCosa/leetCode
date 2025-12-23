import { expect, it } from "vitest";
import emailChainCount from "./email-chain-count";

/**
 Re: Fwd: Fw: Count
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):

"fw:"
"fwd:"
"re:"
Return the total number of occurrences of these markers.


Tests
1. emailChainCount("Re: Meeting Notes") should return 1.
2. emailChainCount("Meeting Notes") should return 0.
3. emailChainCount("Re: re: RE: rE: Meeting Notes") should return 4.
4. emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes") should return 5.
5. emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary") should return 23.
 */

describe("Email Chain Count", () => {
  it("Test Case 1", () => {
    expect(emailChainCount("Re: Meeting Notes")).toBe(1);
  });

  it("Test Case 2", () => {
    expect(emailChainCount("Meeting Notes")).toBe(0);
  });

  it("Test Case 3", () => {
    expect(emailChainCount("Re: re: RE: rE: Meeting Notes")).toBe(4);
  });

  it("Test Case 4", () => {
    expect(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes")).toBe(5);
  });

  it("Test Case 5", () => {
    expect(
      emailChainCount(
        "re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary"
      )
    ).toBe(23);
  });
});
