<script id="tweetContainer" type="text/x-handlebars-template">

    {{#if tweets}}
        {{#each tweets}}
            <p>{{this}}</p>
        {{/each}}
    {{else}}
        <div class="empty center-inner center-text">Empty!</div>
    {{/if}}

</script>

<script id="HBkeywordContainer" type="text/x-handlebars-template">
    <!-- Show spinner -->
</script>

<script id="HBaddContainer" type="text/x-handlebars-template">
    <div class="center-outer">
        <input placeholder="Enter Keyword" class="center-inner left" size="17"></input><a class="button center-text center-inner right">Add</a>
    </div>
</script>

<script id="HBkeywordContainerEmpty" type="text/x-handlebars-template">
    <div class="instructions">
        <p>There are no currently active keywords. Please enter one in the box above to get started!</p>
    </div>
</script>

<script id="HBkeyword" type="text/x-handlebars-template">
    <div class="keyword clearfix">

        <div class="icon left center-text">{{text}}</div>
        <div class="count left center-text">
            #<span>{{numSeen}}</span>
            <a class="keyword-remove">X</a>
        </div>
        <div class="graph left center-outer">
            <div class="bar center-inner"></div>
        </div>
    </div>
</script>

<script id="HBtweet" type="text/x-handlebars-template">
    <div class="tweet">
        <div class="header"><img src="{{imageUrl}}" alt="userImage"/><div class="right">{{userName}}</div></div>
        {{text}}
    </div>
</script>

