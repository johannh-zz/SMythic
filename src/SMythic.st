Smalltalk createPackage: 'SMythic'!
Object subclass: #Mythic
	instanceVariableNames: 'fateArray focusArray fActionArray fSubjectArray chaosFactor gameDescrip favourPoints gameChart fDown fAcross fNum proxyObj'
	package: 'SMythic'!

!Mythic methodsFor: 'as yet unclassified'!

initialize
	super initialize.
	
	fateArray :=
		#(#( 50  25  10   5   5   0   0 -20 -20 -40 -40 -55 -65)
		  #( 75  50  25  15  10   5   5   0   0 -20 -20 -35 -45)
		  #( 90  75  50  35  25  15  10   5   5   0   0 -15 -25)
		  #( 95  85  65  50  45  25  15  10   5   5   5  -5 -15)
		  #(100  90  75  55  50  35  20  15  10   5   5   0 -10)
		  #(105  95  85  75  65  50  35  25  15  10  10   5  -5)
		  #(110  95  90  85  80  65  50  45  25  20  15   5   0)
		  #(115 100  95  90  85  75  55  50  35  25  20  10   5)
		  #(120 105  95  95  90  85  75  65  50  45  35  15   5)
		  #(125 115 100  95  95  90  80  75  55  50  45  20  10)
		  #(130 125 110  95  95  90  85  80  65  55  50  25  10)
		  #(150 145 130 100 100  95  95  90  85  80  75  50  25)
		  #(170 165 150 120 120 100 100  95  95  90  90  75  50)).

	proxyObj := JsMythic newValue: 0 value: 50
!

oddsDown: aDown across: aAcross
	"Look up the odds in the table, return a vector of probs of exceptional yes, yes, and no.
	The remainder is exceptional no."
	| out baseProb |
	fDown := aDown.
	fAcross := aAcross.
	baseProb := (fateArray at: aDown) at: aAcross.
	out := #(0 0 0).
	out at: 2 put: baseProb.
	(baseProb >= 5) ifTrue: [
		out at: 1 put: (baseProb / 5) ceiling ].
	( baseProb <= 95) ifTrue: [
		| exNoProb |
		exNoProb := (baseProb + ((100 - baseProb) * 0.8 + 1)) ceiling.
		out at: 3 put: exNoProb ].
	^ out
! !

Object subclass: #SMLog
	instanceVariableNames: 'queryString textBlocks'
	package: 'SMythic'!

!SMLog methodsFor: 'as yet unclassified'!

addText: plainText
	textBlocks add: plainText.
	queryString ifNotNil: [
		queryString asJQuery
			"Should escape the text."
			append: plainText;
			append: String cr;
			append: '<br/>';
			append: String cr ]
!

initialize
	super initialize.
	textBlocks := Array new
!

initializeWithQuery: aQueryString
	"initialize with a given query string"
	self initialize.
	queryString := aQueryString
! !

!SMLog class methodsFor: 'as yet unclassified'!

newWithQuery: aQueryString
	^ self basicNew initializeWithQuery: aQueryString
! !

Object subclass: #SMythic
	instanceVariableNames: ''
	package: 'SMythic'!

!SMythic methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
! !

!SMythic methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
! !

!SMythic class methodsFor: 'starting'!

start
	self new augmentPage
! !

