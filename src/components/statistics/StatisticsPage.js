import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class StatisticsPage extends React.Component {
    componentWillMount() {
        this.props.actions.loadCourses();
    }

    calculateCourseLength(length) {
        length = length.split(':');
        let hours = length[0] ? parseInt(length[0]) : 0;
        let minutes = length[1] ? parseInt(length[1]) : 0;

        return (hours * 60 + minutes) / 60;
    }

    getConfig() {
        let { courses } = this.props;
        
        return {
            chart: {
                type: 'column'
            },
            legend: {
                enabled: false
            },
            title: {
                text: 'Courses Length'
            },
            xAxis: {
                categories: courses.map(function (course) {
                    return course.Title;
                })
            },
            series: [{
                name: 'Course length',
                data: courses.map((course) => {
                    return {
                        y: this.calculateCourseLength(course.Length),
                        displayValue: course.Length
                    };
                })
            }],
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.displayValue} hours</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            }
        };
    }

    render() { 
        let config = this.getConfig();

        return(
            <div className="jumbotron">
                <h1>Statistics</h1>
                <ReactHighcharts config={config} ref="chart"/>
            </div>
        );
    }
}

StatisticsPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (StatisticsPage);