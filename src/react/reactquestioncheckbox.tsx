﻿/// <reference path="../survey.ts" />
/// <reference path="../../typings/react/react.d.ts" />
class ReactSurveyQuestioncheckbox extends React.Component<any, any> {
    private question: Survey.QuestionCheckbox;
    constructor(props: any) {
        super(props);
        this.question = props.question;
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
    }
    render(): JSX.Element {
        if (!this.question) return null;
        var items = [];
        for (var i = 0; i < this.question.visibleChoices.length; i++) {
            var item = this.question.visibleChoices[i];
            var key = "item" + i;
            items.push(<ReactSurveyQuestioncheckboxItem key={key} question={this.question} item={item} />);
        }
        return (
            <div>
            {items}
            </div>
        );
    }
}
class ReactSurveyQuestioncheckboxItem extends React.Component<any, any> {
    private question: Survey.QuestionCheckbox;
    private item: Survey.ItemValue;
    constructor(props: any) {
        super(props);
        this.item = props.item;
        this.question = props.question;
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    componentWillReceiveProps(nextProps: any) {
        this.item = nextProps.item;
        this.question = nextProps.question;
    }
    handleOnChange(event) {
        var newValue = this.question.value;
        if (!newValue) {
            newValue = [];
        }
        if (event.target.checked) {
            newValue.push(this.item.value);
        } else {
            var index = newValue.indexOf(this.item.value);
            if (index > -1) {
                newValue.splice(index, 1);
            }
        }
        this.question.value = newValue;
        this.setState({ value: this.question.value });
    }
    render(): JSX.Element {
        if (!this.item || !this.question) return null;
        var itemWidth = this.question.colCount > 0 ? (100 / this.question.colCount) + "%" : "100%";
        var divStyle = { width: itemWidth };
        var isChecked = this.question.value && this.question.value.indexOf(this.item.value) > -1;
        var comment = null;
        if (this.item.value === this.question.otherItem.value && isChecked) {
            comment = <div><ReactSurveyQuestionCommentItem question={this.question}/></div>
        }
        return (
            <div class="sv_qcbc" style={divStyle}>
                <label class="sv_q_checkbox">
                    <input type="checkbox"  checked={isChecked} onChange={this.handleOnChange} />
                    <span>{this.item.text}</span>
                    </label>
                {comment}
            </div>
        );
    }
}

/*
    <!--ko foreach: { data: question.visibleChoices, as: 'item', afterRender: question.koAfterRender } -->
    <div class="sv_qcbc"  data-bind="style:{width: question.koWidth}">
            <label class="sv_q_checkbox">
                <input type="checkbox"
                    data-bind="value: item.value, checked: question.koValue" />
                <span data-bind="text: item.text"></span>
                </label>
        </div>
    < !-- /ko -->
    < div data- bind="if:question.hasOther" >
        <div data-bind="template: { name: 'survey-comment', data: {'question': question, 'visible': question.koOtherVisible } }"></div>
    </div >
*/