<script id="messageContainer" type="text/x-handlebars-template">

    {{#if messages}}
        {{#each messages}}
            <p>{{this}}</p>
        {{/each}}
    {{else}}
        <div class="empty center-inner center-text">Empty!</div>
    {{/if}}

</script>

<script id="keywordContainer" type="text/x-handlebars-template">
    <!-- Show spinner -->
</script>

<script id="addContainer" type="text/x-handlebars-template">
    <div class="center-outer">
        <input placeholder="Enter Keyword" class="center-inner left" ></input><a class="button center-text center-inner right">Add</a>
    </div>
</script>

<script id="keywordContainerEmpty" type="text/x-handlebars-template">
    <div class="instructions">
        <p>There are no currently active keywords. Please enter one in the box above to get started!</p>
    </div>
</script>

<script id="keyword" type="text/x-handlebars-template">
    <div class="keyword clearfix">

        <div class="icon left center-text">{{text}}</div>
        <div class="count left center-text">#{{numSeen}}
            <a class="keyword-remove">X</a>
        </div>
        <div class="graph left center-outer">
            <div class="bar center-inner"></div>
        </div>
    </div>
</script>

