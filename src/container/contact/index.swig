{% extends '../common/layout.swig' %}

{% block title %} Contact {% endblock %}
{% block content %}
    <h1>Contact Page</h1>
    <p>
    {% for brdcrmb in breadcrumbs %}
        <span>{{ brdcrmb }}</span>
    {% endfor %}
    </p>
    
    {{ name }}
{% endblock %}