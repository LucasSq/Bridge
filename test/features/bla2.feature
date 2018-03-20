Feature: Serve Candy
  candy should not be served until paid for
  candy should not be served until the button has been pressed
  If there is no candy left then money should be refunded

  Scenario: Buy last candy
    Given I navigate to "localhost:4200"
